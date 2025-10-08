// Define rules globally
export const validationRules = {
    name: {
      required: true,
      message: "Name must be at least 3 characters",
    },
    email: {
      required: true,
      message: "Enter a valid email",
    },
  };
  
  // Global function to validate fields based on rules
  export const validateForm = (formData) => {
    let errors = {};
  
    for (let field in validationRules) {
      const value = formData[field];
      const rules = validationRules[field];
  
      if (rules.required && !value) {
        errors[field] = `${field} is required`;
        continue;
      }
  
      if (rules.minLength && value.length < rules.minLength) {
        errors[field] = rules.message;
      }
  
      if (rules.pattern && !rules.pattern.test(value)) {
        errors[field] = rules.message;
      }
  
      if (rules.type === "number" && isNaN(value)) {
        errors[field] = rules.message;
      }
    }
  
    return errors;
  };
  