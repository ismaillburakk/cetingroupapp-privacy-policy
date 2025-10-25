export const metadata = {
  title: "Çetin Group – Account Deletion",
  robots: "index,follow",
};

export default function AccountDeletionEN() {
  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: 24,
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <h1>Account Deletion</h1>
      <p>
        You can delete your Çetin Group account using one of the methods below.
      </p>

      <h2>1) In-App (Preferred)</h2>
      <ol>
        <li>Open the app and sign in.</li>
        <li>Go to the <strong>Profile</strong> menu.</li>
        <li>Open the <strong>Settings</strong> page.</li>
        <li>Select <strong>Delete Account</strong> and confirm the action.</li>
      </ol>
      <p>
        After confirmation, your account and related personal data will be
        permanently deleted, except for records we are legally required to retain.
      </p>

      <h2>2) By E-mail</h2>
      <p>
        If you cannot access the app, send an email to{" "}
        <a href="mailto:cetingroupuygulama@gmail.com">
          cetingroupuygulama@gmail.com
        </a>{" "}
        with the subject <em>“Account Deletion Request”</em>. Include your registered
        phone number or full name. Your identity will be verified before
        processing the request.
      </p>

      <h2>Security</h2>
      <p>
        All communications are encrypted via HTTPS. Any legally required retained
        records will be removed once the retention period ends.
      </p>

      <p style={{ marginTop: 24, fontSize: 14 }}>
        Türkçe sürüm: <a href="/tr/account-deletion">Türkçe</a>
      </p>
    </main>
  );
}
