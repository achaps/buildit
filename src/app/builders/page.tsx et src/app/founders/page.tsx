import { useState } from 'react';
import { saveEmailToWaitlist } from '@/lib/actions';

export default function BuildersPage() {
  const [error, setError] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateAndSubmitEmail = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      const result = await saveEmailToWaitlist(email, 'builder');
      if (result.success) {
        setError(false);
        setErrorMessage("");
        setIsRegistered(true);
        setShowInput(false);
        triggerConfetti();
      } else {
        setError(true);
        setErrorMessage(result.error as string);
      }
    } else {
      setError(true);
      setErrorMessage("Please enter a valid email address");
    }
  };

  return (
    <div>
      {/* ... rest of the component JSX ... */}
      {error && (
        <p className="text-red-500 text-sm">{errorMessage}</p>
      )}
    </div>
  );
} 