const asyncHandler = async (fn) => async (req, res, next) => {
  try {
    return await fn(req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      messgae: error.message,
      success: false,
    });
  }
};

export { asyncHandler };
