
import { Box, Button, Flex, Image, Link, Spacer, Text, Input } from '@chakra-ui/react';

const About = ({}) => {

    return (
        <div>
      <Flex justify="center" align="center" height="100vh" paddingBottom="30rem" overflow="auto">
        <Box width="70vw" height="100%">
            <div>
                <h1>
                    About Pixel Paws
                </h1>
                <Text fontSize="1.4em" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px 2px #000000">
                    An NFT initiative project by Timothy Koh. The website is built using Vite and runs ReactJS and Typescript.
                    PixelPaws was created using ERC-721 standard for non-fungible tokens on the Ethereum blockchain. 
                </Text>
                <br />
                <h2>
                    NFT Art Creation
                </h2>
                <Text fontSize="1.4em" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px 2px #000000">
                    To begin, individal layers for the artwork is created and hand-drawn using Photoshop. The original idea was created using an AI text-to-image generation software Dall-E.
                    {/* <img src='' alt='Draft mockup of PixelPaws'/> */}
                    It is drafted up and later exported to PNG using HashLip's NFT generator which randomizes and generates the final artwork using weights assigned to create scarcity and rare attributes.
                    HashLip's NFT generator also produces a JSON file which can be used as the Metadata for the image. It was then uploaded to Pinata to test it first before uploading to OpenSea.
                    {/* <img src='' alt='Final artwork of PixelPaws'/> */}
                </Text>
                <br />
                <h2>
                    Writing Contract
                </h2>
                <Text fontSize="1.4em" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px 2px #000000">
                    The next step was to write the Solidity contract. Tech used were Hardhat for testing, Ethers for interacting with smart contracts through the browser, as well as OpenZeppelin to generate the template for the industry standard smart contract (https://www.openzeppelin.com/).
                    The main functions that had to be coded were: mint, isContentOwned, as well as function checkers. To keep the gas fees cheap, it was important to ensure that each line of code was compact and essential.
                </Text>
                <br />
                <h2>
                    Linking to Website
                </h2>
                <Text fontSize="1.4em" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px 2px #000000">
                    After the .sol was created, comes linking it the website using Ethers import.
                    Equal amount of time as the contract writing was spent here as conditional statements and error checkings before sending the mint over to Ether to minimise error during on the contract level.
                    This included priced to paid calculations, quantity, etc.
                    Displaying the mints also required another handshake transaction, so it was instead stored locally using state arrays.
                </Text>
                <br />
                <h2>
                    Experience
                </h2>
                <Text fontSize="1.4em" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px 2px #000000">
                    Overall, this project was done to expose me to the inner workings of BlockChain, and understand how contracts work fundamentally. Along the way I also learnt about testing concepts before uploading to a proper network and market like OpenSea.
                </Text>
                <br />
            </div>
            </Box>
        </Flex>
        </div>
    );
}

export default About;