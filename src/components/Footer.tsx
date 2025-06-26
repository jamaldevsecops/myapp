
export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-6 h-6 bg-white rounded"></div>
          <span className="text-lg font-bold">MyApp Frontend Service v1.1</span>
        </div>
        <p className="text-blue-200">
          © 2024 MyApp Frontend Service. Built with ReactJS.
        </p>
      </div>
    </footer>
  );
};
