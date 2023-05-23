import { writeFile } from 'file-system';

export class Archivo {

    async CrearArchivo(nombreCarpeta: string, nombreArchivo: string, data: string) {
        try {
            await writeFile(this.Concatenar(nombreCarpeta, nombreArchivo), data);
            console.log(`Archivo ${nombreArchivo} creado.`);
        } catch (error) {
            console.error(`Ha ocurrido un error al crear el archivo: ${error.message}`);
        }
    }

    // fuciones transversales
    Concatenar(nombreCarpeta: string, nombreArchivo: string): string {
        return `${nombreCarpeta}/${nombreArchivo}`;
    }
}