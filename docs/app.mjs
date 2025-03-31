/*
(c) 2025 Scot Watson  All Rights Reserved
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import * as Main from "./main.mjs";

const btnOpen = document.createElement("button");
btnOpen.innerHTML = "Open";
btnOpen.addEventListener("click", parseFile);
document.body.appendChild(btnOpen);

function getFile() {
  return new Promise((resolve) => {
    const inpFile = document.createElement("input");
    inpFile.type = "file";
    inpFile.style.display = "none";
    document.body.appendChild(inpFile);
    inpFile.addEventListener("change", () => {
      inpFile.remove();
      resolve(inpFile.files[0]);
    });
    inpFile.click();
  });
}

async function parseFile() {
  const file = await getFile();
  const harObj = JSON.parse(await file.text());
  console.log(harObj);
  if (!(typeof harObj === "object" && harObj !== null)) {
    throw new Error("Invalid format");
  }
  if (!(typeof harObj.log === "object" && harObj.log !== null)) {
    throw new Error("Invalid format");
  }
  if (!(harObj.log.creator === "WebInspector")) {
    throw new Error("Invalid format");
  }
  if (!(typeof harObj.log.entries === "object" && typeof harObj.log.entries[Symbol.iterator] === "function")) {
    throw new Error("Invalid format");
  }
  if (!(typeof harObj.log.pages === "object" && typeof harObj.log.entries[Symbol.iterator] === "function")) {
    throw new Error("Invalid format");
  }
  for (const entry of harObj.log.entries) {
    entry
isIterator(entry.cache)
typeof entry.connection === "string"
    const port = parseInt(entry.connection);
typeof entry.pageref === "string"
entry.request: {
  method: 'GET',
  url: 'https://scotwatson.github.io/WorkerTest/index.html',
  httpVersion: 'http/2.0',
  headers: Array(19),
  queryString: Array(0),
}
entry.response: {
  status: 200,
  statusText: '',
  httpVersion: 'http/2.0',
  headers: Array(23),
  cookies: Array(0),
}
entry.serverIPAddress: "185.199.110.153"
typeof entry.startedDateTime === "string"
    new Date(entry.startedDateTime);
typeof entry.time === "number"
entry.timings: {
  blocked: 10.318000000320374,
  dns: -1,
  ssl: -1,
  connect: -1,
  send: 0.4690000000000012,
}
entry._connectionId: "373875"
entry._initiator: {type: 'other'}
entry._priority: "VeryHigh"
entry._resourceType: "document"
}
}
function isObject(arg) {
  return (typeof arg === "object" && arg !== null);
}
function isIterable(arg) {
  return isObject(arg) && typeof arg[Symbol.iterator] === "function");
}
