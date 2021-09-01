import HttpTool from '@/utils/httpTool/HttpTool';

export default new HttpTool({
  fetchUserInfo: 'GET /api/user/getUserInfo',
  clockIn: 'POST /api/user/clockIn',
});
