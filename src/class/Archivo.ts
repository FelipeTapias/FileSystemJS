import { writeFile } from 'file-system';

export class Archivo {

    static async CrearArchivo(nombreArchivo: string, data: string) {
        try {
            await writeFile(nombreArchivo, data);
            console.log(`Wrote data to ${nombreArchivo}`);
        } catch (error) {
            console.log(`Nombre de archivo: ${nombreArchivo}`);
            console.error(`Got an error trying to write the file: ${error.message}`);
        }
    }
}