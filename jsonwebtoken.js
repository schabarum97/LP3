const jwt = require("jsonwebtoken")
const fs = require("fs")

const payload = { userId: 123, permission: ["read", "write"] }

const privatekey = fs.readFileSync("./private_key.pem")
const publickey = fs.readFileSync("./public_key.pem")

//const token = jwt.sign(payload, privatekey, {algorithm: "RS256"})
//console.log(token)

const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywicGVybWlzc2lvbiI6WyJyZWFkIiwid3JpdGUiXSwiaWF0IjoxNzExMDY2OTIxfQ.iRbVmYwNOuplbfG_ucBSovptj1q9Nr7K0UklEpdDGhtPh_HA01hj4rqnGa3A22mfln2oDw8pa0Jw0IV46CcMhnu1qKVbZGj_ULfmp5VquBlBBv_NvtG-jIicVrh5xBZl8-dRESXRWtWGovk_8GRFiynuI5ivl2oZppOFQHoU-OQAebI8woVaROCNw4yicW2-NHCxOjDfHg-hOBuJDEde0v-NMZ3fqZwx5Ccx_wjAzAs4-BaYTm5VepgO0Ls0qNmxu58kQpHEkTiwox5vkZHzRXZhgTznNGQ5TipymSDebBOBLXqy38WrF9WjQStPfPLFpg0eXEeUHLWCb6pqKiFYlA'

try {
    const decoded = jwt.verify(token, publickey, {algorithms: ['RS256']});
    console.log("Decoded:", decoded);
} catch (err) {
    console.error("Verication failed:", err)
}