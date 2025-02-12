const loggerMiddleware = (action, prevState) => {
    console.log(`Action: ${action.type}`, "Previous State:", prevState);
};

export { loggerMiddleware };
