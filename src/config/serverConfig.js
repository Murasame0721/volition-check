/** change your server config here
 *  if server does not exist, set existence as false
 *  if server exists, set existence as true
 *  when server does not exist, you should let survey respondents send their mark to you
 */

const serverConfig = {
    existence: false,
    serverURL: "http://localhost:3001",
    submitInterface: "/api/submit",
    withdrawInterface: "/api/withdraw",
}

export default serverConfig;