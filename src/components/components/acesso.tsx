import fs from "fs/promises";

const mock = (success: boolean, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(success);
      } else {
        reject({ message: "Error" });
      }
    }, timeout);
  });
};

export default async function Acesso() {
  await fs.appendFile("acesso.txt", `${Date.now()} `, "utf8");
  const data = await fs.readFile("acesso.txt", "utf8");
  
  await mock(true, 3000);

  return <div>{data}</div>;
}
