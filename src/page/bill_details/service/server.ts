import HttpTool from '@/utils/httpTool/HttpTool';
export default new HttpTool({
  getBillsByDate: 'GET /api/bill/getBillsByDate',
  updateBill: 'PUT /api/bill/updateBill',
});
