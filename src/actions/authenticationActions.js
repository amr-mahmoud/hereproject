const request = require("request");
const OAuth = require("oauth-1.0a");
const crypto = require("crypto");
// here.user.id = 'HERE-8228a3c2-d277-4a93-8c8e-4bbb42c1939a'
// here.client.id = zk2Ym3HXfkSRXf1HSlEH
// here.access.key.id = EqVmCtYpnMxZy63PehWF3Q
// here.access.key.secret = cZViuIoOEhcaXziNkcn9sp-8ydYtfPayrzbTSPLGOaoZ8nXH4YSFB2IzJcW5LF8vbSND8hlszyGIOXz1lam3Fg
// here.token.endpoint.url = https://account.api.here.com/oauth2/token

const here = {
  user: { id: "HERE-8228a3c2-d277-4a93-8c8e-4bbb42c1939a" },
  client: { id: "zk2Ym3HXfkSRXf1HSlEH" },
  access: {
    key: {
      id: "EqVmCtYpnMxZy63PehWF3Q",
      secret:
        "cZViuIoOEhcaXziNkcn9sp-8ydYtfPayrzbTSPLGOaoZ8nXH4YSFB2IzJcW5LF8vbSND8hlszyGIOXz1lam3Fg",
    },
  },
  token: { endpoint: { url: "https://account.api.here.com/oauth2/token" } },
};
export const generateToken = () => {
  // #1 Initialize OAuth with your HERE OAuth credentials from the credentials file that you downloaded above
  console.log("IN HERE");
  const oauth = OAuth({
    consumer: {
      key: here.access.key.id, //Access key
      secret: here.access.key.secret, //Secret key
    },
    signature_method: "HMAC-SHA256",
    hash_function(base_string, key) {
      return crypto
        .createHmac("sha256", key)
        .update(base_string)
        .digest("base64");
    },
  });
  // #2 Building the request object.
  const request_data = {
    url: here.token.endpoint.url,
    method: "POST",
    data: { grant_type: "client_credentials" },
  };
  // #3 Sending the request to get the access token
  request(
    {
      url: request_data.url,
      method: request_data.method,
      form: request_data.data,
      headers: oauth.toHeader(oauth.authorize(request_data)),
    },
    function (error, response, body) {
      if (response.statusCode == 200) {
        const result = JSON.parse(response.body);
        console.log("Token", result);
      }
    }
  );
};
