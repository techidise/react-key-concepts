// This file contains components for Chapter Three of the React Key Concepts course.

// The GoalItem component is used to display a list of goals or items.
// It is styled with Tailwind CSS classes for a consistent look and feel.
// The component accepts props for title and id, allowing for flexible item display.
// The component is designed to be reusable, making it easy to display multiple items with different details
export const GoalItem = ({
  title,
  id,
  children,
}: {
  title?: string;
  id?: string;
  children?: React.ReactNode;
}) => {
  return (
    <li className="flex flex-col items-center justify-center text-red-50 p-4 bg-red-700 rounded-lg shadow-md">
      {title} (Book ID# {id}) {children}
    </li>
  );
};

// Product component to display product details
// This component is used to display product information such as title, price, and ID.
// It is styled with Tailwind CSS classes for a consistent look and feel.
// It accepts props for title, price, and id, allowing for flexible product display.
// The component is designed to be reusable, making it easy to display multiple products with different details
export const Product = ({
  title,
  price,
  id,
}: {
  title?: string;
  price?: number;
  id?: number;
}) => {
  return (
    <li className="flex flex-col items-center justify-center text-blue-50 p-4 bg-blue-700 rounded-lg shadow-md">
      {title}: Price: ${price} Product ID# {id}
    </li>
  );
};

// Linky component for external links
export const Linky = ({
  children,
  config,
}: {
  children: React.ReactNode;
  href: string;
  download?: boolean;
  config: object;
}) => {
  return (
    <a
      {...config}
      className="text-2xl text-blue-200 hover:text-blue-400 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

interface LinkiesProps {
  children: React.ReactNode;
  href: string;
  // [key: string]: any; // Allow any other props
}

export const Linkies = ({ children, ...props }: LinkiesProps) => {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noopener"
      className="text-2xl text-blue-200 hover:text-blue-400 underline"
    >
      {children}
    </a>
  );
};

// Note: The Linky component uses the spread operator to apply all properties from the config object to the anchor tag.
// This allows for flexible configuration of the link, such as setting the href and download attributes.
// The rest operator is not explicitly used in this component, but it can be applied in parent components when passing props down to Linky.
// Example usage of the rest operator could be seen in a parent component that collects additional props and passes them down to Linky.
// For instance, a parent component could gather all link-related props into a single object and pass that object to Linky using the spread operator.
// This approach enhances the reusability and flexibility of the Linky component. It allows developers to easily customize the link behavior without modifying the Linky component itself.
// This is particularly useful in scenarios where multiple links share common attributes, such as opening in a new tab or having specific download behavior.
// By using the spread operator, developers can ensure that all relevant attributes are applied consistently across different instances of the Linky component.
// This pattern promotes cleaner code and reduces redundancy, making it easier to maintain and update link configurations
