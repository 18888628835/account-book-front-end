import HttpTool from '@/utils/HttpTool';

export default new HttpTool({
  fetchUserInfo: 'GET /api/user/getUserInfo',
  clockIn: 'POST /api/user/clockIn',
  updateUserInfo: 'PUT /api/user/editUserInfo',
});
