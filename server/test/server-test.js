const expect= require('expect');
const request = require('supertest');
const {ObjectID} = require('MongoDb');
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  _id: new ObjectID(),
  text: 'First Test todo'
},{
  _id: new ObjectID(),
  text: 'Second test todo'
}
];

beforeEach(function(done){
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', function(){
  it('should create   a new Todo', function(done){
    var text = 'Test todo text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect(function(res){
      expect (res.body.text).toBe(text);
    })
    .end(function(err, res){
      if(err){
        done(err);
      }

      Todo.find({text}).then(function(todos){
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch(function(e){
        done(e);
      });
    });
    });
it('should not be created', function(done){
  request(app)
  .post('/todos')
  .send({})
  .expect(400)
  .end(function(err, result){
    if(err){
      return done(err);
    }
    Todo.find().then(function(todos){
      expect(todos.length).toBe(2);
      done();
    }).catch((e) => done(e))
  });
});
});

describe('GET /todos', ()=>{
  it('should get all todos', (done)=>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect(function(res){
      expect(res.body.todos.length).toBe(2)
    })
    .end(done);
  });
});

describe('GET /todos/:id', ()=>{
  it('should return doc', (done)=>{
    request(app)
    .get(`/todos/${todos[0]._id.toHexString()}`)
    .expect(200)
    .expect(function(res){
      expect(res.body.doc.text).toBe(docs[0].text);
    })
    .end(done);
  });
});
