import React, { useState } from "react";

const symptomData = {
  fever: {
    description:
      "Fever is usually a sign of infection. Stay hydrated and rest well.",
    medicines: ["Paracetamol", "Ibuprofen", "Crocin"],
    note: "See a doctor if fever persists beyond 3 days or crosses 103°F.",
  },
  cough: {
    description: "Cough may be caused by cold, allergies, or infections.",
    medicines: ["Benadryl", "Dextromethorphan", "Cough Syrup"],
    note: "Dry cough and wet cough may need different treatment.",
  },
  headache: {
    description: "Often due to stress, dehydration, or lack of sleep.",
    medicines: ["Paracetamol", "Aspirin", "Disprin"],
    note: "Seek medical advice for chronic or severe headaches.",
  },
  cold: {
    description: "Caused by viruses, usually resolves in a few days.",
    medicines: ["Cetirizine", "Vitamin C", "Steam inhalation"],
    note: "Drink warm fluids and rest well.",
  },
  bodyPain: {
    description:
      "General body pain could result from fatigue or viral infection.",
    medicines: ["Paracetamol", "Ibuprofen", "Flexon"],
    note: "Consult a doctor if pain is unexplained or severe.",
  },
  stomachAche: {
    description: "Caused by indigestion, gas, or infection.",
    medicines: ["Digene", "Pantoprazole", "Cyclopam"],
    note: "Avoid spicy food and drink water. Seek medical help for severe pain.",
  },
};

const MedicieneSuggestion = () => {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState(null);

  const handleSearch = () => {
    const keyword = input.toLowerCase().replace(/\s/g, "");
    const match = Object.keys(symptomData).find((key) => keyword.includes(key));
    if (match) {
      setSuggestion(symptomData[match]);
    } else {
      setSuggestion({
        description:
          "No exact match found. Try entering a common symptom like 'fever', 'cold', or 'headache'.",
        medicines: [],
        note: "This tool is for general suggestions only. Consult a doctor for accurate treatment.",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-md mt-10">
      <h1 className="text-2xl font-semibold mb-4">
        Medicine Suggestion by Symptom
      </h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter a symptom (e.g., fever, cold)..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Suggest
        </button>
      </div>

      {suggestion && (
        <div className="bg-gray-100 p-4 rounded">
          <p className="font-medium text-gray-800 mb-2">
            {suggestion.description}
          </p>
          {suggestion.medicines.length > 0 && (
            <>
              <h3 className="font-semibold text-lg">Suggested Medicines:</h3>
              <ul className="list-disc pl-6 my-2">
                {suggestion.medicines.map((med, i) => (
                  <li key={i}>{med}</li>
                ))}
              </ul>
            </>
          )}
          <p className="text-sm text-gray-600 italic">{suggestion.note}</p>
        </div>
      )}
    </div>
  );
};

export default MedicieneSuggestion;
