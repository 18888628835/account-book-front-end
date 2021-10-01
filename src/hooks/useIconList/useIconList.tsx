import httpApi from './server';
const useIconList = () => {
  const iconList = httpApi.servers.fetchIconList(undefined, {
    manual: true,
  });
  const fetchIconList = async () => {
    const result = await iconList.run();
    return result;
  };
  return { fetchIconList };
};

export default useIconList;
