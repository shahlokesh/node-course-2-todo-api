const expect= require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach(function(done){
  Todo.remove({}).then(() => done());
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

      Todo.find().then(function(todos){
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
      expect(todos.length).toBe(0);
      done();
    }).catch((e) => done(e))
  });
});


});
