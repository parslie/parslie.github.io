export default function Form({ children, onSubmit }) {
  const preSubmit = (e) => {
    e.preventDefault();
    if (onSubmit)
      onSubmit(e);
  };

  return <form onSubmit={preSubmit}>{children}</form>;
}
