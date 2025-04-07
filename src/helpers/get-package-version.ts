import { readFileSync } from "fs";
import { join } from "path";

/**
 * Gets the package version from package.json
 * @returns The package version string
 */
export function getPackageVersion(): string {
  const packagePath = join(__dirname, '../../package.json');
  
  try {
    const packageJson = JSON.parse(readFileSync(packagePath, 'utf-8'));
    return packageJson.version;
  } catch (error) {
    console.warn('Failed to read package version:', error);
    return '0.0.0'; // Fallback version
  }
} 