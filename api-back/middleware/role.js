const { handleHttpError } = require("../utils/handleError");
// ! 5:43:38
const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const rolesByUser = user.role;

    const checkValueRol = roles.some((rolSingle) =>
      rolesByUser.includes(rolSingle)
    );
    if (!checkValueRol) {
      handleHttpError(res, "user not permissions", 403);
      return;
    }

    next();
  } catch (e) {
    handleHttpError(res, "error permission", 403);
  }
};

module.exports = checkRol;
