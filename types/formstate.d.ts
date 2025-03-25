interface GeneralFormState {
  ok: boolean;
}

interface LoginFormState extends GeneralFormState {
  errors?: {
    email?: string;
    password?: string;
    form?: string;
  };
}

interface PostFormState extends GeneralFormState {
  errors?: {
    title?: string;
    slug?: string;
    category?: string;
    content?: string;
  };
}
