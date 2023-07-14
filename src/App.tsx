import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {Center, List, ListItem, ListIcon} from '@chakra-ui/react';
import { FormEvent, ChangeEvent, useState } from 'react';
import { FormControl,Input} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

import konoha from './assets/konoha.png'

import {
  Container, Stack, Flex, Box, Heading,
  Text, Button,useColorModeValue,
} from '@chakra-ui/react';


export const App = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
    'initial');
  const [error, setError] = useState(false);
  return (
    <>
      <Tabs>
        <TabList>
          <div style={{tableLayout: 'initial'}}>
            <div style={{float: 'left'}}>
              <img src={konoha} style={{height: 50}}/>
            </div>
            <div style={{float: 'right'}}>
              <Text style={{fontSize: '25pt'}}>Konoha</Text>
            </div>
            
          </div>
          
          
          <Tab>Home</Tab>
          <Tab>Pricing</Tab>
          <Tab>Newsletter</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Container maxW={'7xl'} id='Tela1'>
              <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
                direction={{ base: 'column', md: 'row' }}>
                <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                    <img src={konoha} style={{height: 50}}/>
                    <Text
                      color={'orange.400'}
                      as={'span'}
                      position={'relative'}
                      _after={{
                        content: "''",
                        width: '',
                        height: '30%',
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'red.400',
                        zIndex: -1,
                      }}>KONOHA: </Text>
                    <Text
                      as={'span'}
                      position={'relative'}
                      _after={{
                        content: "''",
                        width: '',
                        height: '30%',
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'red.400',
                        zIndex: -1,
                      }}>
                      DevCode Write once,
                    </Text>
                    <br />
                    <Text as={'span'} color={'red.400'}>
                      use everywhere!
                    </Text>
                  </Heading>
                  <Text color={'gray.500'}>
                    Snippy is a rich coding snippets app that lets you create your own
                    code snippets, categorize them, and even sync them in the cloud so
                    you can use them anywhere. All that is free!
                  </Text>
                  <Stack
                    spacing={{ base: 4, sm: 6 }}
                    direction={{ base: 'column', sm: 'row' }}>
                    <Button
                      rounded={'full'}
                      size={'lg'}
                      fontWeight={'normal'}
                      px={6}
                      colorScheme={'red'}
                      bg={'red.400'}
                      _hover={{ bg: 'red.500' }}>
                      Get started
                    </Button>
                    <Button
                      rounded={'full'}
                      size={'lg'}
                      fontWeight={'normal'}
                      px={6}>
                      How It Works
                    </Button>
                  </Stack>
                </Stack>
                <Flex
                  flex={1}
                  justify={'center'}
                  align={'center'}
                  position={'relative'}
                  w={'full'}>
                  
                  <Box
                    position={'relative'}
                    height={'300px'}
                    rounded={'2xl'}
                    boxShadow={'2xl'}
                    width={'full'}
                    overflow={'hidden'}>
                    
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/mmpR9yn09PA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    
                    
                  </Box>
                </Flex>
              </Stack>
            </Container>
          </TabPanel>
          <TabPanel>
            <Center py={6}>
              <Box 
                maxW={'300px'}
                marginLeft={'10px'}
                marginRight={'100px'}
                w={'70%'}>

              </Box>

              <Box
                maxW={'330px'}
                marginLeft={'10px'}
                marginRight={'10px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                  textAlign={'center'}
                  p={6}
                  color={useColorModeValue('gray.800', 'white')}
                  align={'center'}>
                  <Text
                    fontSize={'sm'}
                    fontWeight={500}
                    bg={useColorModeValue('green.50', 'green.900')}
                    p={2}
                    px={3}
                    color={'green.500'}
                    rounded={'full'}>
                    Hobby
                  </Text>
                  <Stack direction={'row'} align={'center'} justify={'center'}>
                    <Text fontSize={'3xl'}>$</Text>
                    <Text fontSize={'6xl'} fontWeight={800}>
                      79
                    </Text>
                    <Text color={'gray.500'}>/month</Text>
                  </Stack>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      5.000 page views
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      50 automation executions
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      50 identified users
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      All features
                    </ListItem>
                  </List>

                  <Button
                    mt={10}
                    w={'full'}
                    bg={'green.400'}
                    color={'white'}
                    rounded={'xl'}
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    _hover={{
                      bg: 'green.500',
                    }}
                    _focus={{
                      bg: 'green.500',
                    }}>
                    Start your trial
                  </Button>
                </Box>
              </Box>

              <Box
                maxW={'330px'}
                marginLeft={'10px'}
                marginRight={'10px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                  textAlign={'center'}
                  p={6}
                  color={useColorModeValue('gray.800', 'white')}
                  align={'center'}>
                  <Text
                    fontSize={'sm'}
                    fontWeight={500}
                    bg={useColorModeValue('green.50', 'green.900')}
                    p={2}
                    px={3}
                    color={'green.500'}
                    rounded={'full'}>
                    Prime
                  </Text>
                  <Stack direction={'row'} align={'center'} justify={'center'}>
                    <Text fontSize={'3xl'}>$</Text>
                    <Text fontSize={'6xl'} fontWeight={800}>
                      135
                    </Text>
                    <Text color={'gray.500'}>/month</Text>
                  </Stack>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      5.000 page views
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      50 automation executions
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      50 identified users
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      All features
                    </ListItem>
                  </List>

                  <Button
                    mt={10}
                    w={'full'}
                    bg={'green.400'}
                    color={'white'}
                    rounded={'xl'}
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    _hover={{
                      bg: 'green.500',
                    }}
                    _focus={{
                      bg: 'green.500',
                    }}>
                    Start your trial
                  </Button>
                </Box>
              </Box>

              <Box
                maxW={'330px'}
                marginLeft={'10px'}
                marginRight={'10px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Stack
                  textAlign={'center'}
                  p={6}
                  color={useColorModeValue('gray.800', 'white')}
                  align={'center'}>
                  <Text
                    fontSize={'sm'}
                    fontWeight={500}
                    bg={useColorModeValue('green.50', 'green.900')}
                    p={2}
                    px={3}
                    color={'green.500'}
                    rounded={'full'}>
                    Premium
                  </Text>
                  <Stack direction={'row'} align={'center'} justify={'center'}>
                    <Text fontSize={'3xl'}>$</Text>
                    <Text fontSize={'6xl'} fontWeight={800}>
                      269
                    </Text>
                    <Text color={'gray.500'}>/month</Text>
                  </Stack>
                </Stack>

                <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      5.000 page views
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      50 automation executions
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      50 identified users
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color="green.400" />
                      All features
                    </ListItem>
                  </List>

                  <Button
                    mt={10}
                    w={'full'}
                    bg={'green.400'}
                    color={'white'}
                    rounded={'xl'}
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    _hover={{
                      bg: 'green.500',
                    }}
                    _focus={{
                      bg: 'green.500',
                    }}>
                    Start your trial
                  </Button>
                </Box>
              </Box>
              
              
              
            </Center>
          </TabPanel>
          <TabPanel>
            <Flex
              minH={'100vh'}
              minW={'90vw'}
              align={'center'}
              justify={'center'}
              bg={useColorModeValue('gray.50', 'gray.800')}>
              <Container
                maxW={'xl'}
                bg={useColorModeValue('white', 'whiteAlpha.100')}
                boxShadow={'xl'}
                rounded={'lg'}
                p={6}
                direction={'column'}>
                <Heading
                  as={'h2'}
                  fontSize={{ base: 'xl', sm: '2xl' }}
                  textAlign={'center'}
                  mb={5}>
                  Subscribe to our Newsletter
                </Heading>
                <Stack
                  direction={{ base: 'column', md: 'row' }}
                  as={'form'}
                  spacing={'12px'}
                  onSubmit={(e: FormEvent) => {
                    e.preventDefault();
                    setError(false);
                    setState('submitting');

                    // remove this code and implement your submit logic right here
                    setTimeout(() => {
                      if (email === 'fail@example.com') {
                        setError(true);
                        setState('initial');
                        return;
                      }

                      setState('success');
                    }, 1000);
                  }}>
                  <FormControl>
                    <Input
                      variant={'solid'}
                      borderWidth={1}
                      color={'gray.800'}
                      _placeholder={{
                        color: 'gray.400',
                      }}
                      borderColor={useColorModeValue('gray.300', 'gray.700')}
                      id={'email'}
                      type={'email'}
                      required
                      placeholder={'Your Email'}
                      aria-label={'Your Email'}
                      value={email}
                      disabled={state !== 'initial'}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                      }
                    />
                  </FormControl>
                  <FormControl w={{ base: '100%', md: '40%' }}>
                    <Button
                      colorScheme={state === 'success' ? 'green' : 'blue'}
                      isLoading={state === 'submitting'}
                      w="100%"
                      type={state === 'success' ? 'button' : 'submit'}>
                      {state === 'success' ? <CheckIcon /> : 'Submit'}
                    </Button>
                  </FormControl>
                </Stack>
                <Text
                  mt={2}
                  textAlign={'center'}
                  color={error ? 'red.500' : 'gray.500'}>
                  {error
                    ? 'Oh no an error occured! 😢 Please try again later.'
                    : "You won't receive any spam! ✌️"}
                </Text>
              </Container>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>

      
    </>
  )
}

export default App
