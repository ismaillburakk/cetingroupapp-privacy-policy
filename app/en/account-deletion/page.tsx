export const metadata = {
  title: "Çetin Group – Account Deletion",
  robots: "index,follow",
};

export default function AccountDeletionEN() {
  return (
    <main style={{maxWidth:900, margin:"0 auto", padding:24, fontFamily:"system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif", lineHeight:1.6}}>
      <h1>Account Deletion</h1>
      <p>
        You can delete your Çetin Group account using one of the methods below.
      </p>

      <h2>1) In-app (preferred)</h2>
      <ol>
        <li>Open the app and sign in.</li>
        <li>Go to <strong>Profile</strong> &rarr; <strong>Account</strong>.</li>
        <li>Select <strong>Delete Account</strong> and confirm.</li>
      </ol>
      <p>
        After confirmation, your account and related personal data will be irreversibly removed from our systems,
        except records we must retain to comply with applicable laws.
      </p>

      <h2>2) By e-mail</h2>
      <p>
        If you cannot access the app, send an email to{" "}
        <a href="mailto:cetingroupuygulama@gmail.com">cetingroupuygulama@gmail.com</a>{" "}
        with the subject <em>Account Deletion Request</em>. Include your registered phone number or full name.
        We will verify your identity before processing the request.
      </p>

      <h2>Security</h2>
      <p>
        All communications are protected via <strong>HTTPS</strong>. Any legally required retention will be anonymized or deleted
        once the retention period ends.
      </p>

      <p style={{marginTop:24, fontSize:14}}>
        Türkçe sürüm: <a href="/tr/account-deletion">Türkçe</a>
      </p>
    </main>
  );
}
