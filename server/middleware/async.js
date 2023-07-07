/*
  使用 mongoose 處理物件時，大多回傳的都是 Promise，
  而不是一個實際的資料物件，因此這邊透過 async / await，
  等待 Promise 完成並且返回資料後，再轉換為 JSON 格式
*/

const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = asyncWrapper;
