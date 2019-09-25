# gatsby-remark-music

[gatsby-remark-music][1] adds math equation support to gatsby using
[remark-music][2] and [abc notation][3].

## Install

`npm install --save gatsby-transformer-remark gatsby-remark-music abcjs`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-music',
          options: {
            // Add any abcjs options from https://github.com/paulrosen/abcjs here
            // plus a custom "color" option that allows you to set the color of the music sheet.
            // e.g. to use CSS variables:
            color: 'var(--text-color)',
          },
        },
      ],
    },
  },
],
```
### Writing music sheets

Surround your abc music sheet with `§§` and new-lines to generate a music sheet.

**Example markdown:**

```markdown
§§
X: 24
T:Clouds Thicken
C:Paul Rosen
S:Copyright 2005, Paul Rosen
M:6/8
L:1/8
Q:3/8=116
R:Creepy Jig
K:Em
|:"Em"EEE E2G|"C7"_B2A G2F|"Em"EEE E2G|\
"C7"_B2A "B7"=B3|"Em"EEE E2G|
"C7"_B2A G2F|"Em"GFE "D (Bm7)"F2D|\
1"Em"E3-E3:|2"Em"E3-E2B|:"Em"e2e gfe|
"G"g2ab3|"Em"gfeg2e|"D"fedB2A|"Em"e2e gfe|\
"G"g2ab3|"Em"gfe"D"f2d|"Em"e3-e3:|
§§
```

[1]: https://www.gatsbyjs.org/packages/gatsby-remark-music/
[2]: https://github.com/Dabolus/remark-Music
[3]: https://abcnotation.com/
