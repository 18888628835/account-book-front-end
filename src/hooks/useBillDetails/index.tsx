import React from 'react';
import httpApi from './service/server';

const useBillDetails = () => {
  const billDetails = httpApi.servers.getBillsByDate(undefined, {
    manual: true,
  });
  const updateBill = httpApi.servers.updateBill(undefined, {
    manual: true,
  });

  const fetchBillDetails = async (date: { month: string; year: string }) => {
    const result = await billDetails.run({
      params: { month: `${date.year}-${date.month}` },
    });
    return result;
  };

  const updateBillDetails = async data => {
    const result = await updateBill.run({
      data,
    });
    return result;
  };

  return { fetchBillDetails, updateBillDetails };
};

export default useBillDetails;
