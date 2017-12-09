(function()
{
    const [major, minor, release] = (
        browser.runtime.getManifest().version
            .split(".")
            .map(component_string => parseInt(component_string))
    );
    const CURRENT =  /// The current version identifier.
    {
        major:   major,
        minor:   minor,
        release: release
    };
    /// Release notes are hosted here.
    const RELEASE_NOTES_URL = (
        "https://rharel.github.io/webext-private-bookmarks/release-notes/" +
        `${major}-${minor}-${release}.html`
    );
    define({
        CURRENT: CURRENT,
        RELEASE_NOTES:
        {
            url: RELEASE_NOTES_URL,

            // If set, the extension may (per user preference) display the release notes for the
            // installed version upon first user interaction proceeding deployment.
            is_relevant_to_users: false
        }
    });
})();
