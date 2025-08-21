// this is an array/cond assignment and shouldnt be here, move this to conditionals or basic repo
const testResults = [
  { env: "staging", passed: 15, failed: 2, tags: ["api", "login"] },
  { env: "production", passed: 20, failed: 1, tags: ["api", "payment"] },
  { env: "staging", passed: 13, failed: 3, tags: ["ui", "login"] },
  { env: "dev", passed: 18, failed: 4, tags: ["api", "ui"] },
  { env: "production", passed: 22, failed: 0, tags: ["ui"] }
];

function summarizeResults(testResults){
    let envNames = testResults.map(env => env.env)
    let envNamesSet = new Set(envNames)
    let envNamesNoDupe = [...envNamesSet]
    let environments = envNamesNoDupe.sort()

    let passedArray = testResults.map(x => x.passed)
    let totalPassed = passedArray.reduce((index, value)=> index + value)
    
    let failedByEnv = {production : testResults[1].failed + testResults[4].failed, staging : testResults[2].failed + testResults[0].failed, dev : testResults[3].failed }

    let tagArray = testResults.map(env => env.tags)
    let tagSet = new Set(tagArray)
    let tagUniqueArray = [...tagSet]
    

    let results = {};
    results[0] = environments
    results[1] = totalPassed
    results[2] = failedByEnv
    results[3] = tagUniqueArray.sort


    console.log(results)
    console.log(tagUniqueArray.sort())
    console.log(failedByEnv)
    console.log(totalPassed)
    console.log(environments)
}

summarizeResults(testResults)
