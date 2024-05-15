import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <pre>
          <div>
            <div>
              turns out you can edit the next.config.mjs file with your own manually approved domains like so
              to render gifs as proper Image objects:
            </div>
            <div>
              {`/** @type {import('next').NextConfig} */
              const nextConfig = {
                  images: {
                      domains: ['chumley.barstoolsports.com', 'cdn.barstoolsports.com'],
                  },
              };
              export default nextConfig;`}
            </div>
          </div>
        </pre>
      </div>
    </main>
  );
}
