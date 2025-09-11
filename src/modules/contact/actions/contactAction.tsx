// UTILS
import { validateForm } from '../../../shared/utils/form-methods';
import { trimValues } from '../../../shared/utils/object-methods';



export const contactAction = async ({ request }: { request: Request }) => {

  const formData = await request.formData();
  const data = Object.fromEntries(formData)

  const trimmedData = trimValues(data);

  const { isValid, errors } = validateForm(trimmedData);

  if (!isValid) return { errors };
  
  return { success: true };
}