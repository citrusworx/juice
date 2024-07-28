import { promises as fs } from 'fs';
import { marked } from 'marked';

// Check if the required arguments are provided
if (process.argv.length < 4) {
  console.error('Usage: node convert.mjs <template-file> <input-markdown-file> [output-html-file]');
  process.exit(1);
}

// Get the file paths from command line arguments
const templateFilePath = process.argv[2];
const inputFilePath = process.argv[3];
const outputFilePath = process.argv[4] || inputFilePath.replace(/\.md$/, '.html');

// Function to convert markdown to HTML and insert into template
const convertMarkdownToHtml = async () => {
  try {
    // Read the template HTML file
    const templateData = await fs.readFile(templateFilePath, 'utf8');

    // Read the input markdown file
    const markdownData = await fs.readFile(inputFilePath, 'utf8');

    // Convert markdown to HTML
    const markdownContent = marked(markdownData);

    // Insert the markdown content into the <main id="content"> element
    const updatedContent = templateData.replace(
      /<main id="content">([\s\S]*?)<\/main>/,
      `<main id="content">\n${markdownContent}\n</main>`
    );

    // Write the final HTML to the output file
    await fs.writeFile(outputFilePath, updatedContent);

    console.log(`Markdown has been converted to HTML: ${outputFilePath}`);
  } catch (err) {
    console.error('Error processing files:', err.message);
    process.exit(1);
  }
};

// Execute the conversion
convertMarkdownToHtml();
