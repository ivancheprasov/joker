exports.getGeneratedResult = (deepAiOutput) => {
    const resultArray = deepAiOutput.match(/\S.*?\."?(?=\s|$)/g);
    return `${resultArray[0]} ${resultArray[1]}`;
};