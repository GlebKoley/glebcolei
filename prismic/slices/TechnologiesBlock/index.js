/**
 * @typedef {import("@prismicio/client").Content.TechnologiesBlockSlice} TechnologiesBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TechnologiesBlockSlice>} TechnologiesBlockProps
 * @type {import("react").FC<TechnologiesBlockProps>}
 */
const TechnologiesBlock = ({ slice }) => {
   return (
      <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
         Placeholder component for technologies_block (variation: {slice.variation}) slices.
         <br />
         <strong>You can edit this slice directly in your code editor.</strong>
         {/**
          * 💡 Use the Prismic MCP server with your code editor
          * 📚 Docs: https://prismic.io/docs/ai#code-with-prismics-mcp-server
          */}
      </section>
   );
};

export default TechnologiesBlock;
