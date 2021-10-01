import HttpTool from '@/utils/HttpTool';
export default new HttpTool({
  getBillsByDate: 'GET /api/bill/getBillsByDate',
  updateBill: 'PUT /api/bill/updateBill',
  getStatistics: 'GET /api/bill/getStatistics',
});
