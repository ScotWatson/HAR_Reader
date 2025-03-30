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
    inpFile.style.display = "none";
    document.body.appendChild(inpFile);
    inpFile.addEventListener("change", () => {
      inpFile.remove();
      resolve(inpFile.files[0]);
    });
    inpFile.click();
  });
}

function parseFile() {
  const file = await getFile();
  console.log(file.json());
}
