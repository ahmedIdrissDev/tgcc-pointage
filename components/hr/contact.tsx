"use client";
import ReactMarkdown from "react-markdown";
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import Markdown from "react-markdown";
export default function DownloadPDF() {

  

  return (
    <>
    
  <PDFViewer width={1000} height={1000}>
    <Doc />
  </PDFViewer>

    </>
  );
}

function Doc(){
  const styles = StyleSheet.create({
  page: {
   
    direction:'rtl',
    padding:3
  
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});
const markdown = `

# Démission

## Informations sur l’employé

- **Nom complet** : ROGUI Hicham  
- **Adresse** : BLOC DT NR 7 KOUASS CYM RABAT  
- **Numéro de la Carte Nationale (CIN)** : AJ7407  
- **Profession** : Manœuvre  

## Déclaration de démission

Je présente ma démission de mon poste au sein de la **Société de Travaux Généraux de Construction de Casablanca (TGCC)**, dont le siège social est situé au : **4 rue Imam Mouslim, L’Oasis, Casablanca**.

J’ai pris cette décision :

- De mon plein gré, sans aucune pression, crainte ou contrainte.  
- En pleine possession de mes facultés mentales et sans aucun vice de consentement.  
- Suite à l’achèvement de ma mission sur le chantier situé au **CHU RABAT**.  

## Décharge légale

- **Émoluments** : Aucun lien ne me lie plus à la société après avoir reçu l’intégralité de mes dus légaux, y compris les salaires et leurs accessoires.  

- **Contrat de travail** : Je décharge la société de toute responsabilité liée au contrat de travail pour l’exécution d’un travail déterminé que j’avais précédemment conclu avec elle.  

## Date et certification

- **Date d’effet** : La date de démission prend effet à compter du **29-12-2015**.  

- **Attestation** : En foi de quoi, cette attestation de démission est délivrée pour servir et valoir ce que de droit.  

> **Signature légalisée**

`

  return (
    <>
    
  <Document >
    <Page size="A4"  style={styles.page} >
      <ReactMarkdown
  components={{
    h1: ({ children }) => (
        <Text style={{fontWeight:"bold" , fontSize:2}}>{children}</Text>
    ),
    p: ({ children }) => (
      <Text  >{children}</Text>
    ),
    strong: ({ children }) => (


        <Text style={{fontWeight:"bold"}}>{children}</Text>
         ),
  }}
>
  {markdown}
</ReactMarkdown>

    </Page>
  </Document>
  </>
  )
}