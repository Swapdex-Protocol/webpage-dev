'use client';

import React, { useState, useEffect } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import Web3 from 'web3';
import axios from 'axios';

import SmallKPIField from './SmallKPIField';
import LargeKPIField from './LargeKPIField';

const createApi = async () => {
  try {
    const provider = new WsProvider('wss://ws.swapdex.network/');
    const api = await ApiPromise.create({ provider });
    await api.isReady;
    return api;
  } catch (error) {
    console.log('Connection Failed');
  }
};

const LiveDataCard = () => {
  const [api, setApi] = useState(null);
  const [chainHeight, setChainHeight] = useState(null);
  const [TPS, setTPS] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);
  const [transactionFee, setTransactionFee] = useState(null);
  const [validatorNodes, setValidatorNodes] = useState(null);
  const [stakingRewards, setStakingRewards] = useState(null);
  const [totalStaked, setTotalStaked] = useState(null);
  const [sdxPrice, setSdxPrice] = useState(null);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  let unsubscribe = { unsubscribe: () => {} };

  useEffect(() => {
    const sdxApi = createApi().then(setApi);
  }, []);

  // Fetch SDX price on CoinGecko
  useEffect(() => {
    const id = 'swapdex';
    const currency = 'USD';

    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currency}`;

    axios
      .get(url)
      .then((res) => {
        setSdxPrice(res.data.swapdex.usd);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [chainHeight]);

  // Measure Blocktime
  useEffect(() => {
    setStartTime(Date.now());
    setElapsedTime(0);
    clearInterval(intervalId);
    const id = setInterval(() => {
      if (startTime === 0) {
        setStartTime(Date.now());
      }
      if (startTime !== 0) {
        const time = (Date.now() - startTime) / 1000;
        const parsedTime = time.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
        setElapsedTime(parsedTime);
      }
    }, 100);
    setIntervalId(id);
  }, [chainHeight]);

  // Fetching Chain Data
  useEffect(
    () => {
      if (!api) return;
      const fetchData = async () => {
        try {
          const height = await api.rpc.chain.getHeader();
          setChainHeight(height.number.toNumber().toLocaleString());
          let lastBlockTimestamp;
          let blockTime;

          unsubscribe = await api.rpc.chain.subscribeNewHeads(async (header) => {
            // Set Chain Height
            setChainHeight(header.number.toNumber().toLocaleString());

            // Validator Count
            const validators = await api.query.staking.validators.keys();
            setValidatorNodes(validators.length + 1);

            // Total Amount Staked
            const currentEra = await api.query.staking.currentEra();
            const weiTotal = await api.query.staking.erasTotalStake(currentEra.unwrap());
            const web3 = new Web3();
            const etherTotal = web3.utils.fromWei(weiTotal, 'ether');
            const parsedTotal = parseInt(etherTotal, 10) * sdxPrice;
            const formattedTotalStake = parsedTotal.toLocaleString(undefined, { maximumFractionDigits: 2 });
            setTotalStaked(formattedTotalStake);

            // Rewards paid in last era
            /**
             *
            try {
              const rewards = await api.query.staking.erasValidatorReward(currentEra.unwrap() - 1);
              const etherRew = web3.utils.fromWei(rewards.value, 'ether');
              const parsedRewards = parseInt(etherRew, 10) * sdxPrice;
              const formattedRewards = parsedRewards.toLocaleString(undefined, { maximumFractionDigits: 2 });
              setStakingRewards(formattedRewards);
            } catch (error) {
              console.log(error);
            }
            */

            // Total Supply (issuance)
            const res = await api.query.balances.totalIssuance();
            const resEth = web3.utils.fromWei(res, 'ether');
            const parsedTotalSupply = parseFloat(resEth, 10);
            const formattedTotalSupply = parsedTotalSupply.toLocaleString(undefined, { maximumFractionDigits: 2 });
            setTotalSupply(formattedTotalSupply);

            // Transaction per Second
            const block = await api.rpc.chain.getBlock(header.hash);
            const timestamp = await api.query.timestamp.now();
            if (lastBlockTimestamp) {
              blockTime = timestamp - lastBlockTimestamp;
            }
            lastBlockTimestamp = timestamp;
            const numTransactions = block.block.extrinsics.length;
            if (blockTime === 0) {
              const tps = numTransactions / 6;
              setTPS(tps.toLocaleString());
            } else {
              const tps = numTransactions / (blockTime / 1000);
              setTPS(tps.toLocaleString());
            }

            // Transaction Fees
            // Get the events in a block
            const sender = '5FFYsxD7RS7bgLAKT3N11nU94WffZzVXN9E7Vxwe1g62sNrd';
            const recipient = '5HNMF6tXT2kMwrGRM5VyiPQEndwsD7EoZATExm6hs2HDQtGF';
            const info = await api.tx.balances.transfer(recipient, 123).paymentInfo(sender);
            const weiFee = info.partialFee.toString();
            const sdxFee = web3.utils.fromWei(weiFee, 'ether');
            const parsedFee = parseFloat(sdxFee, 10);
            const parsedPrice = parseFloat(sdxPrice, 10);
            const txFee = parsedFee * parsedPrice;
            const parsedTxFee = txFee.toLocaleString(undefined, { maximumFractionDigits: 6 });
            setTransactionFee(parsedTxFee);
            // console.log(parsedFee.toLocaleString(undefined, { maximumFractionDigits: 4 }));
          });
        } catch (error) {
          console.log('Petar in Catch');
          console.log(error);
        }
      };
      fetchData();
      return () => {
        try {
          unsubscribe.unsubscribe();
        } catch (error) {
          console.log(error);
        }
      };
    },
    [api, setApi],
  );
  return (
    <div id="blockchain" className="grid grid-cols-2 tablet-s:grid-cols-4 gap-5 px-4 pb-5 tablet-s:mx-4 laptop-s:px-24 laptop-s:pb-24 laptop-s:w-[900px] laptop-s:mx-auto laptop-l:w-[900px] mx-auto bg-SDX-200 rounded-[17px] z-50 drop-shadow-md">
      <div className="flex col-span-2 tablet-s:col-span-4 flex-col items-center w-full mt-2 mb-2 tablet-s:mt-[19px] tablet-s:mb-[25px] z-50">
        <span className="font-semibold text-[18px] leading-[24px] z-50">SwapDEX</span>
        <h1 className="font-bold text-[40px] leading-[48px] z-50">Blockchain</h1>
        <span className="font-semibold text-[18px] leading-[24px] z-50">Live Data</span>
      </div>

      <SmallKPIField title="Chain Height" data={chainHeight} />
      <SmallKPIField title="Block Time" data={`${elapsedTime} s`} />
      <SmallKPIField title="Transaction Fee" data={`$ ${transactionFee}`} />
      <SmallKPIField title="Validator Nodes" data={validatorNodes} />
      <LargeKPIField title="Total Supply" data={`SDX ${totalSupply}`} />
      <LargeKPIField title="Total Value Staked" data={`USD ${totalStaked}`} />
    </div>

  );
};
export default LiveDataCard;
