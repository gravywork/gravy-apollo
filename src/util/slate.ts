import { Value } from 'slate'

export const MarkTypes = {
  BOLD: 'bold',
  ITALIC: 'italic'
}

export const NodeTypes = {
  BLOCK_QUOTE: 'block-quote',
  HEADING: 'heading-two',
  LINK: 'link'
}

export const deserialize = (jsOrJSON) => {
  const object = typeof jsOrJSON === 'string' ? JSON.parse(jsOrJSON) : jsOrJSON
  return Value.fromJSON(object)
}

export const hasBlock = (value, nodeType) => value.blocks.some(node => node.type === nodeType)

export const hasInline = (value, nodeType) => value.inlines.some(node => node.type === nodeType)

export const hasMark = (value, markType) => value.activeMarks.some(mark => mark.type === markType)

export const serialize = value => JSON.stringify(value.toJSON())

export const initialValue = {
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: ''
              }
            ]
          }
        ]
      }
    ]
  }
}
