function Index({ posts }) {
  return (
    <div className="row">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <div className="col-sm-4">
              <div class="card h-100 ">
                <div class="card-body">
                  <h5 class="card-title">{post.title}</h5>
                  <p class="card-text">{post.body}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Index;

export const getServerSideProps = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
};
