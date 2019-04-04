const HEX_REGEXP = /([0-9a-fA-F]{3,6})$/gm

export const hexToHSL = (hexString) => {
  let parts = hexToRGB(hexString)
  const [red, green, blue] = parts.map(p => p / 255)

  const min = Math.min(red, green, blue)
  const max = Math.max(red, green, blue)

  const luminance = (min + max) / 2

  if (min === max) return [0, 0, luminance]

  const chroma = max - min
  const saturation = luminance > 0.5
    ? chroma / (2 - max - min)
    : chroma / (max + min)

  let segment
  let shift
  switch (max) {
    case red:
      segment = (green - blue) / chroma
      shift = segment < 0 ? 360 / 60 : 0 / 60
      break
    case green:
      segment = (blue - red) / chroma
      shift = 120 / 60
      break
    case blue:
      segment = (red - green) / chroma
      shift = 240 / 60
      break
  }

  const hue = (segment + shift) * 60

  return [hue, saturation, luminance]
}

export const hexToRGB = (hexString) => {
  const match = HEX_REGEXP.exec(hexString)
  if (!match) throw new Error(`Invalid input: "${hexString}"`)

  const hexCode = match[1]
  let parts = []

  if (hexCode.length === 3) {
    parts = [...hexCode].map(c => `${c}${c}`)
  } else if (hexCode.length === 6) {
    parts = hexCode.match(/.{2}/g)
  } else {
    throw new Error(`Invalid input: "${hexString}"`)
  }

  return parts.map(p => parseInt(p, 16))
}

export const hexToHSLString = (hexString) => {
  const [hue, sat, lum] = hexToHSL(hexString)
  return `hsl(${hue},${sat},${lum})`
}
