// postbuild.js
import { copyFile } from 'fs/promises';

try {
  await copyFile('dist/index.html', 'dist/404.html');
  console.log('✅ Copiado index.html como 404.html');
} catch (err) {
  console.error('❌ Error al copiar 404.html:', err);
}
