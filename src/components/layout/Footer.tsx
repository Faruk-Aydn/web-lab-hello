export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
      <p>
        &copy; {new Date().getFullYear()} Faruk Aydın. Tüm hakları saklıdır. &nbsp;|&nbsp;{' '}
        <a
          href="https://github.com/Faruk-Aydn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
