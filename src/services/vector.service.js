// Import the Pinecone library
const {Pinecone}=  require('@pinecone-database/pinecone')


// Initialize a Pinecone client with your API key
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

const ChatGptIndex = pc.Index('chatgpt');

async function createMemory({vectors,metadata}) {
    await ChatGptIndex.upsert({
        id:messageId,
        values:vectors,
        metadata:metadata
    });
}

async function queryMemory({vector,topK}) {
    const data = await ChatGptIndex.query({
        vector: queryVector,
        topK: limit,
        filter: metadata ? metadata: undefined,
        includeMetadata: true,
    });
    return data.matches;
}
module.exports = {
    createMemory,
    queryMemory
};