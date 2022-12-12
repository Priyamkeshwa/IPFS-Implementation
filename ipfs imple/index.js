// Function to handle file upload
async function uploadFile() {
  const file = document.getElementById('file').files[0];
  const fileBuffer = await toArrayBuffer(file);
  const node = await Ipfs.create();
  let {path} = await node.add(fileBuffer)

  // Update the page to display the uploaded file
  document.getElementById('file-name').innerText = file.name
  document.getElementById('file-hash').innerText = path
  document.getElementById('file-link').href = `https://ipfs.io/ipfs/${path}`
  document.getElementById('file-link').innerText = `https://ipfs.io/ipfs/${path}`
}

// Helper function to convert a file to an ArrayBuffer
function toArrayBuffer(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsArrayBuffer(file)
  })
}

