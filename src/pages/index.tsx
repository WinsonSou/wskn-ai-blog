import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function WinsonBio() {
  return (
    <section className={styles.bioSection}>
      <div className="container">
        <div className={styles.bioContainer}>
          <div className={styles.profileImageContainer}>
            <img
              src="/img/profile-pic.png"
              alt="Winson Sou"
              className={styles.profileImage}
            />
          </div>
          <div className={styles.bioContent}>
            <Heading as="h1" className={styles.bioTitle}>
              Winson Sou
            </Heading>
            <p className={styles.bioRole}>
              Advisory Solutions Architect for Cloud Native & AI at Nutanix
            </p>
            <p className={styles.bioDescription}>
              Winson Sou is an Advisory Solutions Architect for Cloud Native & AI at Nutanix, 
              where he helps enterprises across Asia-Pacific Japan build secure, scalable and 
              future-ready platforms for modern applications and generative-AI workloads.
            </p>
            <p className={styles.bioDescription}>
              A hands-on technologist with 15 years of field experience, Winson's career 
              spans the full stack of enterprise infrastructure—from early days VDI roll-outs 
              and data-center virtualization to today's Kubernetes-powered hybrid clouds. 
            </p>
            
            <div className={styles.expertiseSection}>
              <Heading as="h2" className={styles.sectionTitle}>
                What Winson brings to the table
              </Heading>
              
              <div className={styles.expertiseGrid}>
                <div className={styles.expertiseItem}>
                  <h3>Cloud-Native Architecture & Kubernetes</h3>
                  <p>Avid "Kubestronaut" and mentor on Kubernetes Architecture and GitOps.
                    Certified Kubernetes Administrator (CKA) and Kubernetes and 
                    Certified Kubernetes Security Specialist (CKS); </p>
                </div>
                
                <div className={styles.expertiseItem}>
                  <h3>Enterprise AI Enablement</h3>
                  <p>Designs robust, air-gapped AI platforms that accelerate model development 
                  while meeting strict governance and data-sovereignty requirements.</p>
                </div>
                
                <div className={styles.expertiseItem}>
                  <h3>Trusted Advisor & Storyteller</h3>
                  <p>Regular speaker and blogger on topics around Cloud Native and AI</p>
                </div>
              </div>
            </div>
            
            {/* <div className={styles.highlightsSection}>
              <Heading as="h2" className={styles.sectionTitle}>
                Career highlights
              </Heading>
              <ul className={styles.highlightsList}>
                <li>Leads Nutanix's Cloud-Native & AI technical strategy across Southeast Asia (2023 – present).</li>
                <li>Spearheaded multi-site Kubernetes adoption programs that cut application deployment time by 70%.</li>
              </ul>
            </div> */}
            
            <div className={styles.credentialsSection}>
              <Heading as="h2" className={styles.sectionTitle}>
                Credentials & Education
              </Heading>
              <ul className={styles.credentialsList}>
                <li>Kubestronaut, The Linux Foundation (2025)</li>
                <li>Certified Kubernetes Administrator, The Linux Foundation (2025)</li>
                <li>Certified Kuberenetes Security Specialist, The Linux Foundation (2025)</li>
              </ul>
            </div>
            
            <p className={styles.personalNote}>
              When he isn't architecting cloud stacks or experimenting with the latest LLM 
              frameworks, Winson can be found tinkering with his self-sponsored home-lab clusters, sharing code 
              snippets with the community, recording videos and writing blogposts, practicing Calisthenics or chilling with whiskey.
            </p>
            
            <div className={styles.bioLinks}>
              <Link
                className="button button--primary button--lg"
                to="/blog">
                Read My Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Winson Sou - Advisory Solutions Architect"
      description="Advisory Solutions Architect at Nutanix specializing in cloud native and AI"
      wrapperClassName="bio-page-layout">
      <WinsonBio />
    </Layout>
  );
}
