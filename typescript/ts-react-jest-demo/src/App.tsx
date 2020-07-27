import React from 'react';

/* Component Props/State */
interface Props {
  header: React.ReactNode;
  footer: React.ReactNode;
}

/* Component */
const App: React.FC<Props> = ({
  header, footer, children, ...props
}) => {
  return (
    <div {...props}>
      {header}
      {footer}
      {children}
    </div>
  );
};

export default App;
