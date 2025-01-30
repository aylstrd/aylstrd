import fs from 'fs';
import path from 'path';

// Menyimpan lokasi file JSON
const certificationsFilePath = path.join(process.cwd(), 'data', 'certifications.json');

// Tipe data untuk Sertifikat
export interface CertificateType {
    id: string;
    title: string;
    description: string;
    link: string;
    thumbnail: string;
}

export interface CreateAndEditCertificateType {
    title: string;
    description: string;
    link: string;
    thumbnail: string;
}

// Helper untuk membaca file JSON
function readCertificationsFromFile(): CertificateType[] {
    const fileData = fs.readFileSync(certificationsFilePath, 'utf-8');
    return JSON.parse(fileData);
}

// Helper untuk menyimpan ke file JSON
function writeCertificationsToFile(certifications: CertificateType[]): void {
    fs.writeFileSync(certificationsFilePath, JSON.stringify(certifications, null, 2), 'utf-8');
}

export async function createCertificationAction(values: CreateAndEditCertificateType): Promise<CertificateType | null> {
    try {
        const certifications = readCertificationsFromFile();

        const newCertification: CertificateType = {
            id: String(certifications.length + 1), // ID otomatis berdasarkan jumlah data
            ...values
        };

        certifications.push(newCertification);
        writeCertificationsToFile(certifications);

        return newCertification;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getAllCertificationsAction(): Promise<{ certifications: CertificateType[] }> {
    try {
        const certifications = readCertificationsFromFile();
        return { certifications };
    } catch (error) {
        console.log(error);
        return { certifications: [] };
    }
}

export async function deleteCertificationAction(id: string): Promise<CertificateType | null> {
    try {
        const certifications = readCertificationsFromFile();
        const index = certifications.findIndex(cert => cert.id === id);

        if (index === -1) return null;

        const deletedCertification = certifications.splice(index, 1)[0];
        writeCertificationsToFile(certifications);

        return deletedCertification;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getSingleCertificationAction(id: string): Promise<CertificateType | null> {
    try {
        const certifications = readCertificationsFromFile();
        const certification = certifications.find(cert => cert.id === id);

        if (!certification) {
            return null;
        }
        return certification;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function updateCertificationAction(
    id: string,
    values: CreateAndEditCertificateType
): Promise<CertificateType | null> {
    try {
        const certifications = readCertificationsFromFile();
        const index = certifications.findIndex(cert => cert.id === id);

        if (index === -1) return null;

        const updatedCertification: CertificateType = {
            id,
            ...values,
        };

        certifications[index] = updatedCertification;
        writeCertificationsToFile(certifications);

        return updatedCertification;
    } catch (error) {
        console.log(error);
        return null;
    }
}
