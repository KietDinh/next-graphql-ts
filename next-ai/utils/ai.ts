import { ChatAnthropic, ChatAnthropicMessages } from '@langchain/anthropic'
import { StructuredOutputParser } from '@langchain/core/output_parsers'
import { PromptTemplate } from '@langchain/core/prompts'
import z from 'zod'

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    mood: z
      .string()
      .describe('the mood of the person who wrote the journey entry.'),
    subject: z.string().describe('the subject of the journal entry.'),
    summary: z.string().describe('quick summary of the entire entry.'),
    negative: z
      .boolean()
      .describe(
        'is the journal entry negative? (i.e. does it contain negative emotion?).'
      ),
    color: z
      .string()
      .describe(
        'a hexidecimal color code that represents the mood of the entry. Example #0101fe for blue representing happiness.'
      ),
  })
)

const getPrompt = async (content) => {
  const format_instructions = parser.getFormatInstructions()
  const prompt = new PromptTemplate({
    template:
      'Analyze the following journal entry. Follow the instructions and format your response to match the format instructions, no matter what! \n{format_instructions}\n{entry}',
    inputVariables: ['entry'],
    partialVariables: { format_instructions },
  })

  const input = await prompt.format({
    entry: content,
  })
  console.log('parser', parser);
  console.log('format_instructions', format_instructions);
  console.log('prompt', prompt);
  console.log('await prompt.format', input)
  return input
}

export const analyze = async (content) => {
  const input = await getPrompt(content)
  const model = new ChatAnthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
    model: 'claude-3-sonnet-20240229',
    temperature: 0,
  })
  const result = await model.invoke(input)

  try {
    return parser.parse(result)
  } catch (error) {
    console.log(error);
  }
}
